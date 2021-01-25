const transition = document.getElementById('transition');

transition.onclick = function(element) {
  const accountId = document.getElementById('account_id').value;
  const url = accountId
                ? "https://" + accountId + ".signin.aws.amazon.com/console"
                : "https://signin.aws.amazon.com/console";

  chrome.tabs.create({
    "url": url
  }, function() {});
};
