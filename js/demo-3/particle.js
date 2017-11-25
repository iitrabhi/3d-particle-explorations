PL.Particle = class {

	constructor(config, system, loader) {
		this.system = system;
		this.loader = loader;
		this.calc = new PL.Calc();
		this.group = config.group;

		this.size = 0.0001;
		this.sizeTarget = config.size;
		this.sizeConfig = config.size;

		this.elapsed = 0;
		this.delay = config.delay;
		this.initiated = true;
		this.active = false;
		this.dying = false;

		//this.decay = 0;
		//this.dying = false;

		this.geometry = new THREE.SphereBufferGeometry(1, 12, 12);
		this.material = new THREE.MeshBasicMaterial({
			//blending: THREE.AdditiveBlending,
			color: 0xffffff,
			transparent: true,
			opacity: this.calc.rand(0.1, 1),
			depthTest: false,
			precision: 'lowp'
		});
		this.geometry = this.geometry;
		this.material = this.material;
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.mesh.position.x = config.x;
		this.mesh.position.y = config.y;
		this.mesh.position.z = config.z;
		this.mesh.scale.set(this.size, this.size, this.size);
		this.group.add(this.mesh);
	}

	update() {
		if(this.initiated) {
			this.elapsed += this.loader.dtMs;
		}

		if(!this.active && this.elapsed > 400 + this.delay * 5) {
			this.mesh.position.x = 0;
			this.mesh.position.y = 0;
			this.mesh.position.z = 0;
			this.active = true;
		}

		if(this.active && !this.dying) {
			this.size = this.calc.lerp(this.size, this.sizeTarget, 0.1);
		}

		if(!this.dying && this.elapsed > 1500 + this.delay * 3) {
			this.dying = true;
			this.mesh.position.z += 1.1;
		}

		if(this.dying) {
			this.size *= 0.85;
			this.mesh.position.z *= 1.2;
			this.mesh.material.opacity = this.size / this.sizeConfig;
			if(this.size < 0.1) {
				this.dying = false;
				this.active = false;
				this.elapsed = 0;
				this.initiated = false;
				this.mesh.position.x = 0;
				this.mesh.position.y = 0;
				this.mesh.position.z = 0;
				this.size = 0.0001;
				this.sizeTarget = this.sizeConfig;
				this.mesh.material.opacity = this.calc.rand(0.1, 1);
			}
		}

		this.mesh.scale.set(this.size, this.size, this.size);
	}

}