package com.dragomirgdaniel.licenta.monitor;

import com.dragomirgdaniel.licenta.product.Product;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;


@Entity
@Table(name = "monitor", catalog = "store_db")
@Data
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@EqualsAndHashCode(callSuper=false)
@PrimaryKeyJoinColumn(name = "product_idp")
public class Monitor extends Product {


    @Column(name = "brand", nullable = false)
    private String brand;

    @Column(name = "diagonal", nullable = false)
    private Float diagonal;

    @Column(name = "resolution", nullable = false)
    private String resolution;

    @Column(name = "response_time", nullable = false)
    private Integer responseTime;

    @Column(name = "refresh_rate", nullable = false)
    private Integer refreshRate;

    @Column(name = "technology", nullable = false)
    private String technology;

    @Column(name = "color", nullable = false)
    private String color;

    @Column(name = "aspect_ratio", nullable = false)
    private String aspectRatio;

    @Column(name = "ports", nullable = false)
    private String ports;

    @Column(name = "other", nullable = false)
    private String other;

    @Override
    public String toString() {
        return "Monitor{" +super.toString()+
                ", brand='" + brand + '\'' +
                ", diagonal=" + diagonal +
                ", resolution='" + resolution + '\'' +
                ", responseTime=" + responseTime +
                ", refreshRate=" + refreshRate +
                ", technology='" + technology + '\'' +
                ", color='" + color + '\'' +
                ", aspectRatio='" + aspectRatio + '\'' +
                ", ports='" + ports + '\'' +
                ", other='" + other + '\'' +
                '}';
    }
}
