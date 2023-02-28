/**
 * @file
 * Challenge Balidea theme behaviors.
 */
(function (Drupal, once) {

  'use strict';

  Drupal.behaviors.challengeBalideaTheme = {
    attach: function (context, settings) {
      once('btn-in-body', 'body', context).forEach(function () {
        var btn = document.createElement("button");
        btn.className = 'btn'
        btn.innerHTML = Drupal.t('Press button');
        document.body.appendChild(btn);
        btn.addEventListener("click", function() {
          var siteName = document.querySelector(".site-name a").innerText;
          alert(siteName);
        });
      });
    }
  };

} (Drupal, once));
