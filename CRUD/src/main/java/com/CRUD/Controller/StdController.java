package com.CRUD.Controller;

import com.CRUD.Entity.Employe;
import com.CRUD.Repo.EmpRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StdController {

    @Autowired
    private EmpRepo repo;
    @GetMapping("/Empdetails")
    public List<Employe> getStudents(){
        return repo.findAll();
    }
    @PostMapping("/Empsave")
    public Employe AddStudents(@RequestBody Employe emp) {
        return repo.save(emp);
    }
    @PutMapping("/Empupdate")
    public Employe UpdateStudents(@RequestBody Employe emp) {
        return repo.save(emp);
    }
    @DeleteMapping ("/Empdelete/{id}")
    public void DeleteStudent(@PathVariable  Long id) {
        repo.deleteById(id);
    }

}
