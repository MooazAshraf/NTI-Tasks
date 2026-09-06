db.payments.aggregate([
 {
   $group: {
     _id: null,
     totalAmount: { $sum: "$amount" }
   }
 }
])

db.patients.aggregate([
 {
   $group: {
     _id: null,
     totalPatients: { $sum: 1 }
   }
 }
])

db.patients.find(
 { _id: ObjectId("f51909f2428848880354eb58") },
 { name: 1, payments: 1 }
)

db.patients.updateOne(
 { _id: ObjectId("f51909f2428848880354eb58") },
 {
   $set: {
     doctorId: ObjectId("768d00f4507898dcbe86e9c3")
   }
 }
)

db.patients.aggregate([
 {
   $match: {
     name: "منة الله جمال"
   }
 },
 {
   $lookup: {
     from: "doctors",
     localField: "doctorId",
     foreignField: "_id",
     as: "doctor"
   }
 }
])

db.patients.updateOne(
 { _id: ObjectId("f51909f2428848880354eb58") },
 {
   $set: {
     doctor: DBRef(
       "doctors",
       ObjectId("768d00f4507898dcbe86e9c3")
     )
   },
   $unset: {
     doctorId: ""
   }
 }
)

db.patients.findOne(
 { name: "منة الله جمال" }
)

db.patients.createIndex(
  { name: 1 },
  { unique: true }
)

db.patients.getIndexes()