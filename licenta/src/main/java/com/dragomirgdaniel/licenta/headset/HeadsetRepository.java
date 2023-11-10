package com.dragomirgdaniel.licenta.headset;

import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HeadsetRepository extends JpaRepository<Headset, Integer> {
}
