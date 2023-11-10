package com.dragomirgdaniel.licenta.headset;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/products/headsets")
@RestController
public class HeadsetController {
    private final HeadsetService headsetService;

    public HeadsetController(HeadsetService headsetService) {
        this.headsetService = headsetService;
    }
    @GetMapping
    public List<Headset> findAll() {
        return headsetService.findAll();
    }
    @PostMapping
    public <S extends Headset> S save(@RequestBody S entity) {
        System.out.println(entity);
        return headsetService.save(entity);
    }
    @PutMapping("/{idHeadset}")
    public void update(@RequestBody Headset entity,@PathVariable Integer idHeadset) {
        headsetService.update(entity, idHeadset);
    }
    @GetMapping("/{idHeadset}")
    public Optional<Headset> findById(@PathVariable Integer idHeadset) {
        return headsetService.findById(idHeadset);
    }
    @DeleteMapping("/{idHeadset}")
    public void deleteById(@PathVariable Integer idHeadset) {
        headsetService.deleteById(idHeadset);
    }
}
