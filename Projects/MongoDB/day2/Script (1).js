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



/* backup ---------  */

// C:\Program Files\MongoDB\Server\8.2\bin>mongodump --uri="mongodb+srv://moazashrafmohammedali_db_user:gxx0mFRX7MicKRNp@g-10.4udy20h.mongodb.net/?appName=G-10" --out "D:\Moaz's Space\Backups"
// 2026-09-06T16:41:56.567+0300    writing `sample_mflix.comments` to `D:\Moaz's Space\Backups\sample_mflix\comments.bson`
// 2026-09-06T16:41:56.571+0300    writing `sample_mflix.movies` to `D:\Moaz's Space\Backups\sample_mflix\movies.bson`
// 2026-09-06T16:41:56.572+0300    writing `sample_mflix.embedded_movies` to `D:\Moaz's Space\Backups\sample_mflix\embedded_movies.bson`
// 2026-09-06T16:41:56.572+0300    writing `sample_mflix.theaters` to `D:\Moaz's Space\Backups\sample_mflix\theaters.bson`
// 2026-09-06T16:41:57.533+0300    [........................]         sample_mflix.comments  101/41079  (0.2%)
// 2026-09-06T16:41:57.533+0300    [........................]           sample_mflix.movies    0/21349  (0.0%)
// 2026-09-06T16:41:57.534+0300    [........................]  sample_mflix.embedded_movies     0/3483  (0.0%)
// 2026-09-06T16:41:57.534+0300    [........................]         sample_mflix.theaters     0/1564  (0.0%)
// 2026-09-06T16:41:57.535+0300
// 2026-09-06T16:41:58.442+0300    [########################]  sample_mflix.theaters  1564/1564  (100.0%)
// 2026-09-06T16:41:58.442+0300    done dumping `sample_mflix.theaters` (1564 documents)
// 2026-09-06T16:41:58.442+0300    writing `sample_mflix.users` to `D:\Moaz's Space\Backups\sample_mflix\users.bson`
// 2026-09-06T16:41:59.058+0300    done dumping `sample_mflix.users` (185 documents)
// 2026-09-06T16:41:59.058+0300    writing `HospitalManagmentSystem.appointments` to `D:\Moaz's Space\Backups\HospitalManagmentSystem\appointments.bson`
// 2026-09-06T16:41:59.373+0300    done dumping `HospitalManagmentSystem.appointments` (60 documents)
// 2026-09-06T16:41:59.373+0300    writing `HospitalManagmentSystem.users` to `D:\Moaz's Space\Backups\HospitalManagmentSystem\users.bson`
// 2026-09-06T16:41:59.879+0300    done dumping `HospitalManagmentSystem.users` (48 documents)
// 2026-09-06T16:41:59.879+0300    writing `HospitalManagmentSystem.payments` to `D:\Moaz's Space\Backups\HospitalManagmentSystem\payments.bson`
// 2026-09-06T16:42:00.533+0300    [........................]         sample_mflix.comments  101/41079  (0.2%)
// 2026-09-06T16:42:00.533+0300    [........................]           sample_mflix.movies  101/21349  (0.5%)
// 2026-09-06T16:42:00.534+0300    [........................]  sample_mflix.embedded_movies   101/3483  (2.9%)
// 2026-09-06T16:42:00.534+0300
// 2026-09-06T16:42:00.708+0300    done dumping `HospitalManagmentSystem.payments` (40 documents)
// 2026-09-06T16:42:00.708+0300    writing `HospitalManagmentSystem.patients` to `D:\Moaz's Space\Backups\HospitalManagmentSystem\patients.bson`
// 2026-09-06T16:42:01.042+0300    done dumping `HospitalManagmentSystem.patients` (30 documents)
// 2026-09-06T16:42:01.042+0300    writing `HospitalManagmentSystem.medicalReports` to `D:\Moaz's Space\Backups\HospitalManagmentSystem\medicalReports.bson`
// 2026-09-06T16:42:01.528+0300    done dumping `HospitalManagmentSystem.medicalReports` (25 documents)
// 2026-09-06T16:42:01.529+0300    writing `HospitalManagmentSystem.midicine` to `D:\Moaz's Space\Backups\HospitalManagmentSystem\midicine.bson`
// 2026-09-06T16:42:01.837+0300    done dumping `HospitalManagmentSystem.midicine` (25 documents)
// 2026-09-06T16:42:01.837+0300    writing `HospitalManagmentSystem.room` to `D:\Moaz's Space\Backups\HospitalManagmentSystem\room.bson`
// 2026-09-06T16:42:02.149+0300    done dumping `HospitalManagmentSystem.room` (20 documents)
// 2026-09-06T16:42:02.149+0300    writing `HospitalManagmentSystem.reviews` to `D:\Moaz's Space\Backups\HospitalManagmentSystem\reviews.bson`
// 2026-09-06T16:42:02.448+0300    done dumping `HospitalManagmentSystem.reviews` (20 documents)
// 2026-09-06T16:42:02.448+0300    writing `HospitalManagmentSystem.doctors` to `D:\Moaz's Space\Backups\HospitalManagmentSystem\doctors.bson`
// 2026-09-06T16:42:02.755+0300    done dumping `HospitalManagmentSystem.doctors` (15 documents)
// 2026-09-06T16:42:02.755+0300    writing `HospitalManagmentSystem.departments` to `D:\Moaz's Space\Backups\HospitalManagmentSystem\departments.bson`
// 2026-09-06T16:42:03.075+0300    done dumping `HospitalManagmentSystem.departments` (10 documents)
// 2026-09-06T16:42:03.075+0300    writing `sample_mflix.sessions` to `D:\Moaz's Space\Backups\sample_mflix\sessions.bson`
// 2026-09-06T16:42:03.380+0300    done dumping `sample_mflix.sessions` (1 document)
// 2026-09-06T16:42:03.380+0300    writing `HospitalManagmentSystem.notifications` to `D:\Moaz's Space\Backups\HospitalManagmentSystem\notifications.bson`
// 2026-09-06T16:42:03.533+0300               [........................]         sample_mflix.comments  101/41079  (0.2%)
// 2026-09-06T16:42:03.533+0300               [........................]           sample_mflix.movies  101/21349  (0.5%)
// 2026-09-06T16:42:03.535+0300               [........................]  sample_mflix.embedded_movies   101/3483  (2.9%)
// 2026-09-06T16:42:03.536+0300    HospitalManagmentSystem.notifications                             0
// 2026-09-06T16:42:03.537+0300
// 2026-09-06T16:42:03.678+0300    HospitalManagmentSystem.notifications  0
// 2026-09-06T16:42:03.678+0300    done dumping `HospitalManagmentSystem.notifications` (0 documents)
// 2026-09-06T16:42:03.679+0300    writing `HospitalManagmentSystem.prescriptions` to `D:\Moaz's Space\Backups\HospitalManagmentSystem\prescriptions.bson`
// 2026-09-06T16:42:03.990+0300    done dumping `HospitalManagmentSystem.prescriptions` (0 documents)
// 2026-09-06T16:42:03.990+0300    writing `HospitalManagmentSystem.auditLogs` to `D:\Moaz's Space\Backups\HospitalManagmentSystem\auditLogs.bson`
// 2026-09-06T16:42:04.311+0300    done dumping `HospitalManagmentSystem.auditLogs` (0 documents)
// 2026-09-06T16:42:06.534+0300    [........................]         sample_mflix.comments  101/41079  (0.2%)
// 2026-09-06T16:42:06.534+0300    [........................]           sample_mflix.movies  101/21349  (0.5%)
// 2026-09-06T16:42:06.534+0300    [........................]  sample_mflix.embedded_movies   101/3483  (2.9%)
// 2026-09-06T16:42:06.534+0300
// 2026-09-06T16:42:09.533+0300    [........................]         sample_mflix.comments  101/41079  (0.2%)
// 2026-09-06T16:42:09.533+0300    [........................]           sample_mflix.movies  101/21349  (0.5%)
// 2026-09-06T16:42:09.534+0300    [........................]  sample_mflix.embedded_movies   101/3483  (2.9%)
// 2026-09-06T16:42:09.534+0300
// 2026-09-06T16:42:12.407+0300    [########################]  sample_mflix.comments  41079/41079  (100.0%)
// 2026-09-06T16:42:12.407+0300    done dumping `sample_mflix.comments` (41079 documents)
// 2026-09-06T16:42:12.534+0300    [........................]           sample_mflix.movies  101/21349   (0.5%)
// 2026-09-06T16:42:12.534+0300    [#####...................]  sample_mflix.embedded_movies   802/3483  (23.0%)
// 2026-09-06T16:42:12.534+0300
// 2026-09-06T16:42:15.533+0300    [........................]           sample_mflix.movies  101/21349   (0.5%)
// 2026-09-06T16:42:15.534+0300    [#####...................]  sample_mflix.embedded_movies   802/3483  (23.0%)
// 2026-09-06T16:42:15.534+0300
// 2026-09-06T16:42:18.534+0300    [###########.............]           sample_mflix.movies  10515/21349  (49.3%)
// 2026-09-06T16:42:18.534+0300    [#####...................]  sample_mflix.embedded_movies     802/3483  (23.0%)
// 2026-09-06T16:42:18.535+0300
// 2026-09-06T16:42:21.534+0300    [###########.............]           sample_mflix.movies  10515/21349  (49.3%)
// 2026-09-06T16:42:21.534+0300    [#####...................]  sample_mflix.embedded_movies     802/3483  (23.0%)
// 2026-09-06T16:42:21.534+0300
// 2026-09-06T16:42:24.533+0300    [###########.............]           sample_mflix.movies  10515/21349  (49.3%)
// 2026-09-06T16:42:24.533+0300    [##########..............]  sample_mflix.embedded_movies    1510/3483  (43.4%)
// 2026-09-06T16:42:24.535+0300
// 2026-09-06T16:42:27.534+0300    [###########.............]           sample_mflix.movies  10515/21349  (49.3%)
// 2026-09-06T16:42:27.534+0300    [##########..............]  sample_mflix.embedded_movies    1510/3483  (43.4%)
// 2026-09-06T16:42:27.534+0300
// 2026-09-06T16:42:30.534+0300    [###########.............]           sample_mflix.movies  10515/21349  (49.3%)
// 2026-09-06T16:42:30.534+0300    [##########..............]  sample_mflix.embedded_movies    1510/3483  (43.4%)
// 2026-09-06T16:42:30.534+0300
// 2026-09-06T16:42:31.890+0300    [########################]  sample_mflix.movies  21349/21349  (100.0%)
// 2026-09-06T16:42:31.890+0300    done dumping `sample_mflix.movies` (21349 documents)
// 2026-09-06T16:42:33.534+0300    [##########..............]  sample_mflix.embedded_movies  1510/3483  (43.4%)
// 2026-09-06T16:42:36.534+0300    [###############.........]  sample_mflix.embedded_movies  2209/3483  (63.4%)
// 2026-09-06T16:42:39.534+0300    [###############.........]  sample_mflix.embedded_movies  2209/3483  (63.4%)
// 2026-09-06T16:42:42.534+0300    [####################....]  sample_mflix.embedded_movies  2912/3483  (83.6%)
// 2026-09-06T16:42:45.115+0300    [########################]  sample_mflix.embedded_movies  3483/3483  (100.0%)
// 2026-09-06T16:42:45.116+0300    done dumping `sample_mflix.embedded_movies` (3483 documents)

// C:\Program Files\MongoDB\Server\8.2\bin>