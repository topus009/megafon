import keyMirror from 'keymirror';

export default keyMirror({
  GETUSERS: null,
  GETUSERSERROR: null,
  DELETEUSER: null,
  // FIXME: DELETEUSERERROR =>
  // collection.findAndModify is deprecated. Use findOneAndUpdate, findOneAndReplace or findOneAndDelete instead.
  DELETEUSERERROR: null,
  PENDING: null,
  SAVEUSERTOSTORE: null,
  SAVEUSER: null,
  EDITUSER: null,
  SETERROR: null,
  CLEARFIELDS: null,
});
