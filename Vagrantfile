Vagrant.configure("2") do | config |
	config.vm.box = "ubuntu/trusty64"
	config.vm.network :forwarded_port, guest: 3000, host: 3000

	## config.vm.synced_folder "./", ""
	
	config.vm.provider "virtualbox" do | vb |
		vb.name = "Meteor2AngularCBMS"
		vb.customize ["modifyvm", :id, "--memory", "1024"]
	end
end
