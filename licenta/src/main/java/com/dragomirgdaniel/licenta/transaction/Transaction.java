package com.dragomirgdaniel.licenta.transaction;

import com.dragomirgdaniel.licenta.account.Account;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "transaction", catalog = "store_db")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idtransaction", nullable = false)
    private Integer idTransaction;

    @ManyToOne
    @JoinColumn(name = "account_idc", referencedColumnName = "idc")
    private Account account;

    @Column(name = "transaction_date", nullable = false)
    private LocalDateTime transactionDate;

    @Column(name = "id_address", nullable = false)
    private String address;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private TransactionStatus status;

    @Column(name = "total_price", nullable = false)
    private Float totalPrice;

    @OneToMany(mappedBy = "transaction", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private final List<TransactionHasProduct> transactionHasProducts = new ArrayList<>();

    public void addTransactionHasProduct(TransactionHasProduct transactionHasProduct) {
        transactionHasProducts.add(transactionHasProduct);
        transactionHasProduct.setTransaction(this);
    }

    public void removeTransactionHasProduct(TransactionHasProduct transactionHasProduct) {
        transactionHasProducts.remove(transactionHasProduct);
        transactionHasProduct.setTransaction(null);
    }
    public enum TransactionStatus {
        PENDING,
        DELIVERY,
        DONE,
        DENIED
    }
}