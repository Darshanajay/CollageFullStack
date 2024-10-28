package com.CabBooking.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.CabBooking.Entity.CabBooking;
import com.CabBooking.Repo.CabRepo;

@RestController
public class CabController {
	
	@Autowired
	private CabRepo repo;
	
	@GetMapping("/Bookingdetails")
	public List<CabBooking> getAllDetails(){
		return repo.findAll();
	}
	
	@GetMapping("/Bookingdetails/{mobileNumber}")
	public List<CabBooking> getAlldetailByNo(@PathVariable Long mobileNumber){
		return repo.findByMobileNumber(mobileNumber);
	}
	
	@PostMapping("/Bookingsave")
	public CabBooking AddDetails(@RequestBody CabBooking Cab) {
		return repo.save(Cab);
	}
	
	@PutMapping("/Bookingupdate")
	public CabBooking UpdateDetails(@RequestBody CabBooking Cab) {
		return repo.save(Cab);
	}
	
	@DeleteMapping("Bookingdelete/{tripid}")
	public void deleteDetail(@PathVariable int tripid) {
		repo.deleteById(tripid);
	}
}
