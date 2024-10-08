package com.H2Database.Service;

import com.H2Database.Entity.Employee;
import com.H2Database.Repo.EmpRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmpService {

    @Autowired
    EmpRepo Repo;

    public List<Employee> getAllEmp(){
        return Repo.findAll();
    }
    public Optional<Employee> getEmpById(int id){
        return Repo.findById(id);
    }
    public Employee addEmp(Employee Emp){
        return Repo.save(Emp);
    }

    public Employee updateEmp(int id , Employee Emp){
        Optional<Employee> CEmp = Repo.findById(id);
        if(CEmp.isPresent()){
            Employee Empl = CEmp.get();
            Empl.setName(Emp.getName());
            Empl.setDept(Emp.getDept());
            return Repo.save(Empl);
        }
        return null;
    }

    public void delete(int id){
        Repo.deleteById(id);
    }
}
