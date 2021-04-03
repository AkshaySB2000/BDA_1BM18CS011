use student
db.studentinfo.insert({rollno: 123, age: 20, contactno: 9845630122, emailid: "akash@gmail.com"})
db.studentinfo.insert({rollno: 125, age: 20, contactno: 9735279049, emailid: "ritu@gmail.com"})
db.studentinfo.insert({rollno: 157, age: 20, contactno: 9262838484, emailid: "raghav@gmail.com"})
db.studentinfo.insert({rollno: 146, age: 19, contactno: 9286375216, emailid: "shyam@gmail.com"})
db.studentinfo.insert({rollno: 193, age: 21, contactno: 7383625272, emailid: "yogesh@gmail.com"})
show tables
db.studentinfo.find()
db.studentinfo.insert({rollno: 10, age: 20, contactno: 9327634527, emailid: "asha@gmail.com"})
db.studentinfo.find()
db.studentinfo.update({rollno: 10}, {$set: {emailid: "ashab@gmail.com"}})
db.studentinfo.find({rollno: 10})
db.studentinfo.insert({rollno: 11, age: 21, contactno: 9345673254, name: "ABC", emailid: "abc@gmail.com"})
db.studentinfo.update({rollno: 11}, {$set: {name: "FEM"}})
db.studentinfo.find({rollno: 11})
db.studentinfo.find().pretty()
db.studentinfo.drop()