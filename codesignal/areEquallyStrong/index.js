function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  const yourStrength = [yourLeft, yourRight];
  const friendsStrength = [friendsLeft, friendsRight];

  return yourStrength.filter((x) => friendsStrength.includes(x)).length == 2;
}

areEquallyStrong(10, 15, 15, 10);

areEquallyStrong(15, 10, 15, 9);
