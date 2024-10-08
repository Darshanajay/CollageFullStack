package com.H2Database.Controller;

import com.H2Database.Entity.Employee;
import com.H2Database.Service.EmpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Employe")
public class EmpController {

    @Autowired
    EmpService Service;

    @GetMapping
    public List<Employee> getAllEmp(){
        return Service.getAllEmp();
    }
    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmpById(@PathVariable int id) {
        Optional<Employee> Emp = Service.getEmpById(id);
        return Emp.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
    @PostMapping
    public Employee addEmp(@RequestBody Employee Emp){
        return Service.addEmp(Emp);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmp(@PathVariable int id, @RequestBody Employee Emp) {
        Employee updateEmpl = Service.updateEmp(id, Emp);
        if (updateEmpl != null) {
            return ResponseEntity.ok(updateEmpl);
        }
        return ResponseEntity.notFound().build();
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEmp(@PathVariable int id) {
        Service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
