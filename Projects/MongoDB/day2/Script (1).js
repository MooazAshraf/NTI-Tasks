db.payments.aggregate([
 {
   $group: {
     _id: null,
     totalAmount: { $sum: "$amount" }
   }
 }
])

////////////////////////

db.patients.aggregate([
 {
   $group: {
     _id: null,
     totalPatients: { $sum: 1 }
   }
 }
])

////////////////////////


db.patients.aggregate([
  {
    $match: {
      _id: ObjectId("86455b37da3fff65d0714541")
    }
  },
  {
    $lookup: {
      from: "payments",
      localField: "_id",
      foreignField: "patient",
      as: "payments"
    }
  },
  {
    $project: {
      _id: 0,
      name: 1,
      "payments.amount": 1
    }
  }
])

////////////////////////



db.patients.aggregate([
  {
    $lookup: {
      from: "doctors",
      localField: "primaryDoctor",
      foreignField: "_id",
      as: "doctor"
    }
  },
  {
    $unwind: "$doctor"
  },
  {
    $project: {
      _id: 0,
      name: 1,
      doctorName: "$doctor.name"
    }
  }
])


////////////////////////



db.patients.aggregate([
  {
    $match: {
      _id: ObjectId("86455b37da3fff65d0714541")
    }
  },
  {
    $lookup: {
      from: "payments",
      localField: "_id",
      foreignField: "patient",
      as: "payments"
    }
  },
  {
    $project: {
      _id: 0,
      name: 1,
      "payments.amount": 1
    }
  }
])

