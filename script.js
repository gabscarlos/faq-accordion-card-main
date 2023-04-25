var details = document.querySelectorAll("details");

details.forEach(function(detail) {
  detail.addEventListener("toggle", function() {
    if (this.open) {
      details.forEach(function(otherDetail) {
        if (otherDetail !== detail) {
          otherDetail.open = false;
        }
      });
    }
  });
});
