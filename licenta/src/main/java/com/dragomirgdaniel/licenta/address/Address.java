package com.dragomirgdaniel.licenta.address;
import com.dragomirgdaniel.licenta.account.Account;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "address", catalog = "store_db")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idaddress", nullable = false)
    private Integer idAddress;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_idc", referencedColumnName = "idc")
    private Account account;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "country", nullable = false)
    private String country;

    @Column(name = "city", nullable = false)
    private String city;
}
