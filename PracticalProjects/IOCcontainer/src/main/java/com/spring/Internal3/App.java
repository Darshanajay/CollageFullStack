package com.spring.Internal3;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {  
       ApplicationContext context = new ClassPathXmlApplicationContext("com/spring/Internal3/config.xml");
       Employee emp1 = (Employee) context.getBean("Emp1");
       Employee emp2 = (Employee) context.getBean("Emp2");
       Employee emp3 = (Employee) context.getBean("Emp3");
       System.out.println(emp1);
       System.out.println(emp2);
       System.out.println(emp3);
    }
}
