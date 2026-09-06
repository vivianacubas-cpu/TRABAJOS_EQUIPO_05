package pe.edu.vallegrande.app.rest;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.edu.vallegrande.app.model.Customer;
import pe.edu.vallegrande.app.service.CustomerService;

import java.util.List;

@RestController
@RequestMapping("/v1/api/customer")
@RequiredArgsConstructor
public class CustomerRest {

    private final CustomerService service;

    @GetMapping
    public ResponseEntity<List<Customer>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Customer> findById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/state/{state}")
    public ResponseEntity<List<Customer>> findByState(@PathVariable String state) {
        return ResponseEntity.ok(service.findByState(state));
    }

    @PostMapping("/save")
    public ResponseEntity<Customer> save(@RequestBody Customer customer) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(customer));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Customer> update(@PathVariable Long id, @RequestBody Customer customer) {
        return service.update(id, customer)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PatchMapping("/delete/{id}")
    public ResponseEntity<Customer> delete(@PathVariable Long id) {
        return service.findById(id).map(customer -> {
            service.delete(id);
            return ResponseEntity.ok(customer);
        }).orElse(ResponseEntity.notFound().build());
    }

    @PatchMapping("/restore/{id}")
    public ResponseEntity<Customer> restore(@PathVariable Long id) {
        return service.findById(id).map(customer -> {
            service.restore(id);
            return service.findById(id)
                    .map(ResponseEntity::ok)
                    .orElse(ResponseEntity.notFound().build());
        }).orElse(ResponseEntity.notFound().build());
    }
}
