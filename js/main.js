$(document).ready(function () {
	var modalButton = $('[data-toggle=modal]');
	var closeModalButton = $('[data-toggle=close-modal]');
	var regButton= $('[data-toggle=register]');
	var closeRegister = $('[data-toggle=close-modal-reg]');
	var Register = $('[data-toggle=register-button]');
	
	regButton.on('click', openReg);
	regButton.on('click', closeModal);
	closeRegister.on('click', closeReg);
	modalButton.on('click', openModal);
	closeModalButton.on('click', closeModal);
	Register.on('click', closeReg);

	function closeModal(){
		var overlay = $(".modal__overlay");
		var wrapper = $(".modal__wrapper");
		overlay.removeClass("modal__overlay--visible")
		wrapper.removeClass("modal__wrapper--visible")
	}

	function openModal(){
		var overlay = $(".modal__overlay");
		var wrapper = $(".modal__wrapper");
		overlay.addClass("modal__overlay--visible")
		wrapper.addClass("modal__wrapper--visible")
	}

	function openReg(){
		var overlay = $(".modal-register__overlay");
		var wrapper = $(".modal-register__wrapper");
		overlay.addClass("modal-register__overlay--visible")
		wrapper.addClass("modal-register__wrapper--visible")
	}
	function closeReg(){
		var overlay = $(".modal-register__overlay");
		var wrapper = $(".modal-register__wrapper");
		overlay.removeClass("modal-register__overlay--visible")
		wrapper.removeClass("modal-register__wrapper--visible")
	}
	$(document).keyup(function(e) {
		if (e.key === "Escape" || e.keyCode === 27) {
			closeModal();
			closeReg();
		}
	});
});