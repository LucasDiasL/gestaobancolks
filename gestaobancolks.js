package bancolks.com;

import java.time.LocalDateTime;
import javax.persistence.*;
import org.openxava.annotations.*;
import org.openxava.model.*;
import lombok.*;

@Entity @Getter @Setter
public class Bancolks extends Identifiable {
    
    @Column(length=100) @Required
    private String nome;
    
    @Column(length=100) @Required
    private String login;
    
    @Column(length=100) @Required
    private String email;
    
    @Column(length=15) @Required
    private String telefone;
    
    @Column(length=200)
    private String endereco;
    
    @Stereotype("DATETIME") @Required
    private LocalDateTime dataCadastro;
    
    @PrePersist
    public void prePersist() {
        dataCadastro = LocalDateTime.now();
    }
}

@Entity @Getter @Setter
public class Transferencia extends Identifiable {
    
    @ManyToOne @Required
    private Bancolks contaOrigem;
    
    @ManyToOne @Required
    private Bancolks contaDestino;
    
    @Column @Required
    private double valor;
    
    @Stereotype("DATETIME") @Required
    private LocalDateTime dataTransferencia;
    
    @PrePersist
    public void prePersist() {
        dataTransferencia = LocalDateTime.now();
    }
    
    public double getValor() {
        return valor;
    }
    
    public String getTitularContaOrigem() {
        return contaOrigem.getNome();
    }
    
    public String getTitularContaDestino() {
        return contaDestino.getNome();
    }
}
