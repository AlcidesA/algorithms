function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  const yourStrength = [yourLeft, yourRight];
  const friendsStrength = [friendsLeft, friendsRight];

  console.log(yourStrength.filter((x) => friendsStrength.includes(x)));

  return true;
}

areEquallyStrong(10, 15, 15, 10);

areEquallyStrong(15, 10, 15, 9);
