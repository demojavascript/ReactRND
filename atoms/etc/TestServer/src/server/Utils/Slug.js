const Slug = function(str) {
  str = str.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ').toLowerCase();
  str = str.replace(/^\s+|\s+$/gm,'');
  str = str.replace(/\s+/g, '-');
  return str;
}

module.exports = Slug;
