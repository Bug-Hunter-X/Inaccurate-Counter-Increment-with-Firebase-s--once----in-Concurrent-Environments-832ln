function incrementCounter(userId) {
  const userRef = db.ref('users/' + userId);
  userRef.transaction((currentCount) => {
    if (currentCount) {
      return currentCount + 1;
    } else {
      return 1;
    }
  });
}