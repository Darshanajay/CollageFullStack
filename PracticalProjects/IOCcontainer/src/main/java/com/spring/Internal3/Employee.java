package com.spring.Internal3;

public class Employee {
	private String ename;
	private String eage;
	private String eaddress;
	public String getEname() {
		return ename;
	}
	public void setEname(String ename) {
		this.ename = ename;
		System.out.println(ename);
	}
	public String getEage() {
		return eage;
		
	}
	public void setEage(String eage) {
		this.eage = eage;
		System.out.println(eage);
	}
	public String getEaddress() {
		return eaddress;
	}
	public void setEaddress(String eaddress) {
		this.eaddress = eaddress;
		System.out.println(eaddress);
		System.out.println("---------------------");
	}
	public Employee(String ename, String eage, String eaddress) {
		super();
		this.ename = ename;
		this.eage = eage;
		this.eaddress = eaddress;
	}
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Employee [ename=" + ename + ", eage=" + eage + ", eaddress=" + eaddress + "]";
	}	
}
