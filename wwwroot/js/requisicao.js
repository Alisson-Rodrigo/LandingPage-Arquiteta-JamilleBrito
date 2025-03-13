 // Função para enviar o email via fetch com logs de debug
 async function sendEmail(emailRequest) {
    console.log("Iniciando envio de email com os dados:", emailRequest);
    try {
      const response = await fetch("https://arquitetajamillebrito.shop/api/SMTPEmail/enviar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": "MinhaChaveSuperSecreta123"
        },
        body: JSON.stringify(emailRequest)
      });

      console.log("Status da resposta:", response.status);

      // Lê a resposta como texto para debug
      const responseText = await response.text();
      console.log("Corpo da resposta (texto):", responseText);

      if (!response.ok) {
        throw new Error("Erro na requisição. Status: " + response.status);
      }

      // Tenta converter a resposta para JSON
      let responseData;
      try {
        responseData = JSON.parse(responseText);
      } catch (parseError) {
        console.warn("Não foi possível converter a resposta para JSON. Resposta bruta:", responseText);
        responseData = responseText;
      }

      console.log("Email enviado com sucesso!", responseData);
      return responseData;
    } catch (error) {
      console.error("Erro na requisição:", error);
      throw error;
    }
  }

  // Adiciona o listener para o submit do formulário
  document.getElementById("contactForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Extrai os dados do formulário e faz o mapeamento dos nomes dos campos
    const form = event.target;
    const formData = new FormData(form);
    const emailRequest = {
      nome: formData.get("name"),       // 'name' do formulário -> 'nome'
      email: formData.get("email"),
      assunto: formData.get("subject"), // 'subject' -> 'assunto'
      mensagem: formData.get("message") // 'message' -> 'mensagem'
    };

    console.log("Dados extraídos do formulário:", emailRequest);

    try {
      const result = await sendEmail(emailRequest);
      alert("E-mail enviado com sucesso!");
      form.reset(); // Limpa o formulário após envio bem-sucedido
    } catch (error) {
      alert("Erro ao enviar e-mail. Verifique o console para mais detalhes.");
    }
  });