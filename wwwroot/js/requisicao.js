document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      // Extrai os dados do formulário
      const formData = new FormData(form);
      const emailRequest = {
        nome: formData.get("name"),
        email: formData.get("email"),
        assunto: formData.get("subject"),
        mensagem: formData.get("message")
      };

      console.log("Dados extraídos do formulário:", emailRequest);

      try {
        const result = await sendEmail(emailRequest);
        alert("E-mail enviado com sucesso!");
        form.reset();
      } catch (error) {
        alert("Erro ao enviar e-mail. Verifique o console para mais detalhes.");
      }
    });
  } else {
    console.error("Elemento com id 'contactForm' não encontrado.");
  }
});
