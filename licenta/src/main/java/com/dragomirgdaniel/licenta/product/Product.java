package com.dragomirgdaniel.licenta.product;

import com.dragomirgdaniel.licenta.review.Review;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "product", catalog = "store_db")
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@Data
@Inheritance(strategy = InheritanceType.JOINED)
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idp", unique = true, nullable = false)
    private Integer id;

    @Column(name = "image", nullable = false)
    private String image;

    @Column(name = "stock", nullable = false)
    private Integer stock;

    @Column(name = "category", nullable = false)
    private String category;

    @Column(name = "price", nullable = false)
    private Float price;

    @Column(name = "warranty", nullable = false)
    private Integer warranty;

    @Column(name = "name", nullable = false)
    private String name;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.LAZY)
    private List<Review> reviews = new ArrayList<>();


    public void addReview(Review review) {
        reviews.add(review);
        review.setProduct(this);
    }

    public void removeReview(Review review) {
        reviews.remove(review);
        review.setProduct(null);
    }

}
