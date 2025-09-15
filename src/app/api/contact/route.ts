// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nom, email, telephone, typeDemenagement, message } = body;

    // Validation
    if (!nom || !email || !telephone) {
      return NextResponse.json(
        { error: "Les champs nom, email et téléphone sont obligatoires." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Veuillez entrer une adresse email valide." },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #5073C0; border-bottom: 2px solid #5073C0; padding-bottom: 10px;">
          Nouvelle demande de contact - Bras Rapides
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Informations du client</h3>
          <p><strong>Nom:</strong> ${nom}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Téléphone:</strong> ${telephone}</p>
          ${
            typeDemenagement
              ? `<p><strong>Type de déménagement:</strong> ${typeDemenagement}</p>`
              : ""
          }
        </div>
        
        ${
          message
            ? `
        <div style="background-color: #fff; border-left: 4px solid #B54340; padding: 15px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Message</h3>
          <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
        `
            : ""
        }
        
        <div style="background-color: #f0f0f0; padding: 15px; border-radius: 8px; margin-top: 20px; font-size: 12px; color: #666;">
          <p>Email envoyé depuis le site web Bras Rapides</p>
          <p>Date: ${new Date().toLocaleString("fr-FR")}</p>
        </div>
      </div>
    `;

    // Send email to your business
    const { data, error } = await resend.emails.send({
      from: "Bras Rapides <no-reply@resend.dev>", // Correct format
      to: ["delivered@resend.dev"], // Your business email
      subject: `Nouvelle demande de contact - ${nom}`,
      html: emailContent,
      replyTo: email, // So you can reply directly to the customer
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email. Veuillez réessayer." },
        { status: 500 }
      );
    }

    // Optional: Send confirmation email to the customer
    const confirmationEmail = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #5073C0;">Merci pour votre message !</h2>
        
        <p>Bonjour ${nom},</p>
        
        <p>Nous avons bien reçu votre demande de contact. Notre équipe vous contactera dans les plus brefs délais pour discuter de votre projet de déménagement.</p>
        
        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3>Récapitulatif de votre demande :</h3>
          <p><strong>Nom:</strong> ${nom}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Téléphone:</strong> ${telephone}</p>
          ${
            typeDemenagement
              ? `<p><strong>Type de déménagement:</strong> ${typeDemenagement}</p>`
              : ""
          }
        </div>
        
        <p>En attendant, n'hésitez pas à nous appeler directement au <strong>+33 6 66 63 14 54</strong> pour toute urgence.</p>
        
        <p style="margin-top: 30px;">
          Cordialement,<br>
          L'équipe Bras Rapides
        </p>
        
        <div style="border-top: 1px solid #ddd; padding-top: 15px; margin-top: 30px; font-size: 12px; color: #666;">
          <p>Bras Rapides - Déménagement partout en France</p>
          <p>Téléphone: +33 6 66 63 14 54 | Email: test.example.fr</p>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: "Bras Rapides <no-reply@resend.dev>",
      to: [email],
      subject: "Confirmation de réception - Bras Rapides",
      html: confirmationEmail,
    });

    return NextResponse.json(
      {
        message: "Email envoyé avec succès",
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Erreur serveur. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
