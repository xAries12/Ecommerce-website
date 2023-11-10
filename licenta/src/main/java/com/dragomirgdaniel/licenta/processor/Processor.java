package com.dragomirgdaniel.licenta.processor;

import com.dragomirgdaniel.licenta.product.Product;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Entity
@Table(name = "processor", catalog = "store_db")
@Data
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@EqualsAndHashCode(callSuper=false)
@PrimaryKeyJoinColumn(name = "product_idp")
public class Processor extends Product {

    @Column(name = "producer", nullable = false)
    private String producer;

    @Column(name = "model", nullable = false)
    private String model;

    @Column(name = "socket", nullable = false)
    private String socket;

    @Column(name = "core", nullable = false)
    private String core;

    @Column(name = "series", nullable = false)
    private String series;

    @Column(name = "number_of_cores", nullable = false)
    private Integer numberOfCores;

    @Column(name = "number_of_threads", nullable = false)
    private Integer numberOfThreads;

    @Column(name = "frequency", nullable = false)
    private Float frequency;

    @Column(name = "frequency_max", nullable = false)
    private Float frequencyMax;

    @Column(name = "cache", nullable = false)
    private Float cache;

    @Column(name = "tdp_max", nullable = false)
    private Integer tdpMax;

    @Column(name = "other")
    private String other;

    @Override
    public String toString() {
        return "Processor{" + super.toString()+
                "producer='" + producer + '\'' +
                ", model='" + model + '\'' +
                ", socket='" + socket + '\'' +
                ", core='" + core + '\'' +
                ", series='" + series + '\'' +
                ", numberOfCores=" + numberOfCores +
                ", numberOfThreads=" + numberOfThreads +
                ", frequency=" + frequency +
                ", frequencyMax=" + frequencyMax +
                ", cache=" + cache +
                ", tdpMax=" + tdpMax +
                ", other='" + other + '\'' +
                '}';
    }
}
