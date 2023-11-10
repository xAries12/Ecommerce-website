package com.dragomirgdaniel.licenta.account;

import com.dragomirgdaniel.licenta.address.Address;
import com.dragomirgdaniel.licenta.address.AddressService;
import com.dragomirgdaniel.licenta.auth.AuthenticationResponse;
import com.fasterxml.jackson.annotation.JsonGetter;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/accounts")
@RestController
public class AccountController {
    private final AccountService accountService;
    private final AddressService addressService;

    public AccountController(AccountService accountService, AddressService addressService) {
        this.accountService = accountService;
        this.addressService = addressService;
    }
    @GetMapping
    public List<Account> findAll() {
        return accountService.findAll();
    }
    @PutMapping("/{idc}")
    public void update(@RequestBody Account entity, @PathVariable int idc) {
       accountService.update(entity,idc);
    }
    @GetMapping("/{idc}")
    public Account findById(@PathVariable Integer idc) {
        return accountService.findById(idc);
    }
    @DeleteMapping("/{idc}")
    public void deleteById(@PathVariable Integer idc) {
        accountService.deleteById(idc);
    }
    @GetMapping("/email/{email}")
    public Optional<Account> findByEmail(@PathVariable String email) {
        return accountService.findByEmail(email);
    }
    @PutMapping("/role/{idAccount}")
    public void updateRole(@PathVariable Integer idAccount,@RequestBody String role) {
        accountService.updateRole(idAccount, role);
    }
}
