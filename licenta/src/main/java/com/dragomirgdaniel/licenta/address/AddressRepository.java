package com.dragomirgdaniel.licenta.address;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AddressRepository extends JpaRepository<Address,Integer> {
    public List<Address> findByAccountIdc(int accountIdc);
}
