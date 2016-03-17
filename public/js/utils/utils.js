function alert(msg, title, type) {
    configToastr();
    toastr[type](msg, title);
}

function configToastr() {
    toastr.options.closeButton = true;
    toastr.options.progressBar = true;
    toastr.options.positionClass = "toast-top-center";
    toastr.options.preventDuplicates= true;
    toastr.options.showEasing = "swing";
    toastr.options.hideEasing = "linear";
    toastr.options.showMethod = "fadeIn";
    toastr.options.hideMethod = "fadeOut";
    /*toastr.options.showDuration = "9999999999999";
    toastr.options.hideDuration = "99999999999999";
    toastr.options.timeOut = "9999999999999";
    toastr.options.extendedTimeOut = "9999999999999999";*/
}
