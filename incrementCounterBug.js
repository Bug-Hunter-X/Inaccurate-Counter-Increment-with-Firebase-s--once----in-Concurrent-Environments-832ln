function incrementCounter(userId) {
  const userRef = db.ref('users/' + userId);
  userRef.once('value', (snapshot) => {
    const currentCount = snapshot.val().counter || 0; 
    const updatedCount = currentCount + 1;
    userRef.update({ counter: updatedCount });
  });
}