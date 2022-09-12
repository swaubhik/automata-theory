// dfa that accepts a language
// that contains all strings that
// contain the substring 101
function dfa(s) {
  var state = 0;
  for (var i = 0; i < s.length; i++) {
    if (state == 0 && s[i] == "1") {
      state = 1;
    } else if (state == 1 && s[i] == "0") {
      state = 2;
    } else if (state == 2 && s[i] == "1") {
      state = 3;
    } else {
      state = 0;
    }
  }
  console.log(state == 3);
  return state == 3;
}
dfa("110011101");
