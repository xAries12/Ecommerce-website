package com.dragomirgdaniel.licenta.product;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping
public class ProductController {
    private final ProductRepository productRepository;

    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
    @GetMapping("/products/{idp}")
    public Optional<Product> findById(@PathVariable Integer idp) {
        System.out.println(idp);
        return productRepository.findById(idp);
    }
    @GetMapping("/get_products")
    public List<Product> findAll() {
        return productRepository.findAll();
    }
}
