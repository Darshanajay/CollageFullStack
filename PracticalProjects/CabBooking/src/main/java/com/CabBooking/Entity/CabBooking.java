package com.CabBooking.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity(name = "cabbokking")
public class CabBooking {
	
	@Id
	private int tripid;
	@Column(name = "mobileNumber")
	private Long mobileNumber;
	@Column(name = "pickUpLocation")
	private String pickUpLocation;
	@Column(name = "dropOffLocation")
	private String dropOffLocation;
	@Column(name = "isCancelled")
	private Boolean isCancelled;
	public int getTripid() {
		return tripid;
	}
	public void setTripid(int tripid) {
		this.tripid = tripid;
	}
	public Long getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(Long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getPickUpLocation() {
		return pickUpLocation;
	}
	public void setPickUpLocation(String pickUpLocation) {
		this.pickUpLocation = pickUpLocation;
	}
	public String getDropOffLocation() {
		return dropOffLocation;
	}
	public void setDropOffLocation(String dropOffLocation) {
		this.dropOffLocation = dropOffLocation;
	}
	public Boolean getIsCancelled() {
		return isCancelled;
	}
	public void setIsCancelled(Boolean isCancelled) {
		this.isCancelled = isCancelled;
	}
	@Override
	public String toString() {
		return "CabBooking [tripid=" + tripid + ", mobileNumber=" + mobileNumber + ", pickUpLocation=" + pickUpLocation
				+ ", dropOffLocation=" + dropOffLocation + ", isCancelled=" + isCancelled + "]";
	}
	
}
