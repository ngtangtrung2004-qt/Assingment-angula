// var jwt = require('jsonwebtoken');
// function verifyToken(){
// let token= req.headers.authorization;
//     jwt.verify(token, 'caovanquyet', function(err, decoded) {
       
//         if(decoded){
//             next();
//         }else{
//             res.status(400).json({message: "Unauthorised"})
//         }
//       });
// }
// module.exports = verifyToken;


var jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  console.log("verif");
  try {
    const authHeader = req.headers['authorization'];
    console.log(authHeader);
  const token = authHeader && authHeader.split(" ")[1];
  var ketqua= jwt.verify(token, "fpoly");
  console.log(ketqua.id);
  if(ketqua){
    next();
  }
  } catch (error) {
    return res.json('Lỗi Bạn cần phải Login');
  }
  
}


module.exports = verifyToken;



// const jwt = require('jsonwebtoken');

// function verifyToken(req, res, next) {
//   // Lấy token từ header 'Authorization'
//   const authHeader = req.headers.authorization;
// console.log(authHeader);
//   if (authHeader) {
//     // Loại bỏ 'Bearer ' để lấy token thực sự
//     const token = authHeader.split(' ')[1];

//     jwt.verify(token, "fpoly", (err, user) => {
//       if (err) {
//         return res.sendStatus(403);
//       }

//       // Nếu token hợp lệ, 'user' sẽ chứa payload mà bạn đã đưa vào khi tạo token
//       req.user = user;
//       next();
//     });
//   } else {
//     // Nếu không có header 'Authorization', trả về lỗi
//     res.sendStatus(401);
//   }
// }

// module.exports = verifyToken;