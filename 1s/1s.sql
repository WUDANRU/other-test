show databases;
use myblog;
show tables;
select * from users; -- *指所有列 id/username/password/realname

update users set realname='李四' where  username='heiha'; -- 如果报错：你正在使用安全模式，执行下面一个
SET SQL_SAFE_UPDATES=0;

 -- insert into插入/新增    update更改    select查询    delete删除     软删除：加了state，default需要为1，为0会添加失败
 -- NN代表不为空  PK主键，就是不能重复并且会自动新增  AI自动增加  Y代表yes default默认
 -- delete selected删除表里的列      drop table删除表      alter table修改表

select id,password from users; 
insert into users (username,`password`,realname)value('hei','12345','hei'); 
insert into users (username,`password`,realname)value('lala','235','jenny');
delete from users where password like '%1%'; -- %1%模糊查询
update users set password=789 where realname='jenny'; -- int 整数类型  （datatype数据类型：int整数类型/bigint更大整数类型/longtext长文本/varchat字符串） 

select * from users where realname <> 'jenny'; -- <>代表不等于

select * from users order by username;

select * from users order by id desc; -- 不加desc代表正序，加了代表倒叙

update users set state='0' where username='lala'; -- 软删除



ALTER TABLE `myblog`.`users` -- 这里不能加分号，因为连续下一句
ADD COLUMN `state` VARCHAR(45) NOT NULL DEFAULT '1' AFTER `realname`;

alter table `myblog`.`users` drop column `state`;

alter table `myblog`.`users` add column `hello` int not null default '1' after `password`; 

ALTER TABLE `myblog`.`users` DROP COLUMN `hello`;

-- mysql -u root -p
select version(); -- 查的是mysql的版本



