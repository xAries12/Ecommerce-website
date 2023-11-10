package com.dragomirgdaniel.licenta.keyboard;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/products/keyboards")
@RestController
public class KeyboardController {

    private final KeyboardService keyboardService;

    public KeyboardController(KeyboardService keyboardService) {
        this.keyboardService = keyboardService;
    }
    @GetMapping
    public List<Keyboard> findAll() {
        return keyboardService.findAll();
    }
    @PostMapping
    public <S extends Keyboard> S save(@RequestBody S entity) {
        return keyboardService.save(entity);
    }
    @PutMapping("/{idKeyboard}")
    public Keyboard update(@RequestBody Keyboard entity,@PathVariable Integer idKeyboard) {
       return keyboardService.update(entity, idKeyboard);
    }
    @GetMapping("/{idKeyboard}")
    public Optional<Keyboard> findById(@PathVariable Integer idKeyboard) {
        return keyboardService.findById(idKeyboard);
    }
    @DeleteMapping("/{idKeyboard}")
    public void deleteById(@PathVariable Integer idKeyboard) {
        keyboardService.deleteById(idKeyboard);
    }
}
