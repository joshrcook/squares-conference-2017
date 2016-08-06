/**
 * Write an email address to the screen. Helps so that bots can't parse email addresses from the site.
 *
 *     writeEmail("info", "info", "churchmedia.cc");
 *
 * @param string
 * @param string
 * @param string
 */
function writeEmail(contact, email, emailHost) {
  document.write("<a href=" + "&#109a&#105l" + "&#116&#111:" + email + "@" + emailHost+ ">" + contact + "@" + emailHost+"</a>");
}
