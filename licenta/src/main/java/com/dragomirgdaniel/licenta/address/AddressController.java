package com.dragomirgdaniel.licenta.address;

import com.dragomirgdaniel.licenta.account.Account;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
public class AddressController {
    private final AddressService addressService;


    public AddressController(AddressService addressService) {
        this.addressService = addressService;
    }
    @GetMapping("/addresses")
    public List<Address> findAll() {
        return addressService.findAll();
    }
    @PostMapping("/accounts/{accountId}/addresses")
    public <S extends Address> S save(@RequestBody S entity,@PathVariable int accountId) {
        return addressService.save(entity,accountId);
    }
    @PutMapping("/addresses/{idAddress}")
    public void update(@RequestBody Address entity,@PathVariable int idAddress) {
        addressService.update(entity, idAddress);
    }
    @GetMapping("/addresses/{idAddress}")
    public Optional<Address> findById(@PathVariable Integer idAddress) {
        return addressService.findById(idAddress);
    }
    @DeleteMapping("/addresses/{idAddress}")
    public void deleteById(@PathVariable Integer idAddress) {
        addressService.deleteById(idAddress);
    }
    @GetMapping("/accounts/{accountId}/addresses")
    public List<Address> getAddresses(@PathVariable Integer accountId) {
        return addressService.findAddressesById(accountId);
    }

}
