package com.CRUD.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Employe {
    @Id
    private Long id;
    @Column(name = "ename")
    private String ename;
    @Column(name = "edept")
    private String edept;

    public Employe(Long id, String ename, String edept) {
        this.id = id;
        this.ename = ename;
        this.edept = edept;
    }

    public Employe() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEname() {
        return ename;
    }

    public void setEname(String ename) {
        this.ename = ename;
    }

    public String getEdept() {
        return edept;
    }

    public void setEdept(String edept) {
        this.edept = edept;
    }

    @Override
    public String toString() {
        return "Employe{" +
                "id=" + id +
                ", ename='" + ename + '\'' +
                ", edept='" + edept + '\'' +
                '}';
    }
}
