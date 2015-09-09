Pracovnici.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
