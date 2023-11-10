package com.dragomirgdaniel.licenta.address;

import com.dragomirgdaniel.licenta.account.Account;
import com.dragomirgdaniel.licenta.account.AccountRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class AddressService {
    public final AddressRepository addressRepository;
    public final AccountRepository accountRepository;

    public AddressService(AddressRepository addressRepository, AccountRepository accountRepository) {
        this.addressRepository = addressRepository;
        this.accountRepository = accountRepository;
    }

    public List<Address> findAll() {
        return addressRepository.findAll();
    }

    public <S extends Address> S save(S entity,int idc) {
        Optional<Account> account = accountRepository.findById(idc);
        account.ifPresentOrElse(account1 -> {
        },() -> {
            System.out.println("idc:"+idc);
        });
        System.out.println(entity);
        return addressRepository.save(entity);
    }
    public void update(Address entity,int idAddress) {
        Optional<Address> byId = addressRepository.findById(idAddress);
        Address address1 = byId.map(address -> {
            address.setAccount(entity.getAccount());
            address.setAddress(entity.getAddress());
            address.setCountry(entity.getCountry());
            address.setCity(entity.getCity());
            return address;
        }).orElseGet(()->{
            entity.setIdAddress(idAddress);
            return entity;
        });
        addressRepository.save(address1);
    }

    public Optional<Address> findById(Integer integer) {
        return addressRepository.findById(integer);
    }

    public void deleteById(Integer integer) {
        addressRepository.deleteById(integer);
    }
    public List<Address> findAddressesById(Integer idc) {
        return addressRepository.findByAccountIdc(idc);
    }

}
