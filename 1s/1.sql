use myblog;
select * from users;

-- sql攻击
  -- 下面的sql语句片段是对密码加了注释(用户名为lala' -- |密码自定义)
-- select username,realname from users where username='lala' -- ' and password='789';

-- 下面的sql语句片段是对密码加了注释(用户名为lala';delete from users; -- |密码自定义)和不能尝试，这个会删除users
select username,realname from users where username='lala';delete from users; -- ' and password='789';



select * from blogs;
insert into blogs(title,content,createtime,author)values('&lt;script&gt;alert(document.cookie)&lt;/script&gt;','heiha',666666666,'abc');
update users set password='6f126c9e05428f184a74944a73c567b5' where username='lala';