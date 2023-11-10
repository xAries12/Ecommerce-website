package com.dragomirgdaniel.licenta.transaction;

import com.dragomirgdaniel.licenta.product.Product;
import com.dragomirgdaniel.licenta.product.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TransactionHasProductService {
    private final TransactionHasProductRepository transactionHasProductRepository;
    private final ProductRepository productRepository;
    private final TransactionRepository transactionRepository;

    public TransactionHasProductService(TransactionHasProductRepository transactionHasProductRepository, ProductRepository productRepository, TransactionRepository transactionRepository) {
        this.transactionHasProductRepository = transactionHasProductRepository;
        this.productRepository = productRepository;
        this.transactionRepository = transactionRepository;
    }

    public void save(TransactionHasProductDto thpd) {
        TransactionHasProduct transactionHasProduct = new TransactionHasProduct();
        transactionHasProduct.setProductId(productRepository.findById(thpd.getIdProduct()).get().getId());
        transactionHasProduct.setTransaction(transactionRepository.findById(thpd.getIdTransaction()).get());
        transactionHasProduct.setCount(thpd.getCount());
        transactionHasProduct.setPrice(productRepository.findById(thpd.getIdProduct()).get().getPrice());

        Optional<Product> product = productRepository.findById(transactionHasProduct.getProductId());
        product.map(product1->{
            product1.setStock(product1.getStock()-transactionHasProduct.getCount());
            return productRepository.save(product1);
        });
       transactionHasProductRepository.save(transactionHasProduct);
    }

}
