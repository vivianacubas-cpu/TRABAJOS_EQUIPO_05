package pe.edu.vallegrande.app.repository;

import pe.edu.vallegrande.app.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    List<Customer> findByState(String state);
}
