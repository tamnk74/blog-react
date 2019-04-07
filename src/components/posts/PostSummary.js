import React from 'react'

const PostSummary = () => {
  return (
    <div>
      <h2><a href="/posts/1">PHÂN BIỆT CALL, APPLY VÀ BIND TRONG JAVASCRIPT</a></h2>
      <div>Prototype của function

Đúng vậy, ba hàm&nbsp;call,&nbsp;apply&nbsp;và&nbsp;bind&nbsp;là các&nbsp;prototype&nbsp;của&nbsp;Function. Nên chỉ có Function mới có thể gọi được 3 hàm này. Sở dĩ, một Function có thể gọi function khác vì trong JavaScript, Function cũng là một loại&nbsp;Object, mà đã là Object thì sẽ có prototype, hay nói cách khác là gọi được phương thức của nó. Bạn có thể tham khảo về 3 hàm&nbsp;call,&nbsp;apply&nbsp;và&nbsp;bind&nbsp;tại:&nbsp;Function.prototype.call(), &nbsp;Function.prototype.apply()&nbsp; và&nbsp;Function.prototype.bind().

Tóm tắt nội dung của 3 hàm số

Bạn có thể nhớ nội dung của&nbsp;call,&nbsp;apply&nbsp;và&nbsp;bind&nbsp;một cách ngắn gọn như sau:

call

Gọi hàm và cho phép bạn truyền vào một object và các đối số phân cách nhau bởi dấu phẩy (Comma)


function.call(thisArg, arg1, arg2, ...)


apply

Gọi hàm...</div>
      <p>
        <span className="category">
        </span></p><p>
        <i className="fa fa-user"></i> By: <a href="#">admin</a> |
        </p>
      <p>
        &nbsp;<i className="fa fa-calendar" ></i> 30/09/2018 |
        </p>
      <p>
        &nbsp;<i className="fa fa-comments" ></i> <a href="#"> 1 viewer</a> |
        </p>
      <p> Categories:
                        <span className="label label-primary">javascript</span>
      </p>

      <p></p>
    </div>
  )
}

export default PostSummary