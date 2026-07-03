import React from 'react';

export default function Sobre() {
	return (
		<main style={{ fontFamily: 'Arial, sans-serif', color: '#1f2937', lineHeight: 1.6 }}>
			<section
				style={{
					minHeight: '100vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '40px 20px',
					background: 'linear-gradient(135deg, #fdf2f8 0%, #eff6ff 100%)',
				}}
			>
				<div
					style={{
						maxWidth: '900px',
						width: '100%',
						background: '#ffffff',
						borderRadius: '24px',
						boxShadow: '0 20px 50px rgba(0, 0, 0, 0.08)',
						overflow: 'hidden',
					}}
				>
					<header style={{ padding: '56px 40px 28px', textAlign: 'center' }}>
						<p style={{ margin: 0, fontSize: '14px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ec4899' }}>
							Sobre nós
						</p>
						<h1 style={{ margin: '12px 0 16px', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#111827' }}>
							Educação, tecnologia e protagonismo feminino
						</h1>
						<p style={{ margin: '0 auto', maxWidth: '720px', fontSize: '1.05rem', color: '#4b5563' }}>
							Criamos um espaço acolhedor para inspirar meninas e mulheres a aprender, construir e transformar o futuro com tecnologia.
						</p>
					</header>

					<section style={{ padding: '0 40px 40px' }}>
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
								gap: '20px',
								marginBottom: '32px',
							}}
						>
							{[
								{ title: 'Missão', text: 'Promover acesso à educação digital com inclusão, criatividade e apoio.' },
								{ title: 'Visão', text: 'Ser referência em formação tecnológica para meninas e jovens mulheres.' },
								{ title: 'Valores', text: 'Respeito, colaboração, diversidade, autonomia e inovação.' },
							].map((item) => (
								<article
									key={item.title}
									style={{
										padding: '24px',
										borderRadius: '20px',
										background: '#f9fafb',
										border: '1px solid #e5e7eb',
									}}
								>
									<h2 style={{ margin: '0 0 10px', fontSize: '1.25rem', color: '#111827' }}>{item.title}</h2>
									<p style={{ margin: 0, color: '#4b5563' }}>{item.text}</p>
								</article>
							))}
						</div>

						<div
							style={{
								display: 'grid',
								gridTemplateColumns: '1.2fr 0.8fr',
								gap: '24px',
								alignItems: 'stretch',
							}}
						>
							<article
								style={{
									padding: '28px',
									borderRadius: '20px',
									background: '#111827',
									color: '#ffffff',
								}}
							>
								<h2 style={{ marginTop: 0, fontSize: '1.6rem' }}>Quem somos</h2>
								<p style={{ color: '#d1d5db' }}>
									Somos uma iniciativa criada para fortalecer a presença feminina na tecnologia por meio de conteúdos,
									experiências e oportunidades de aprendizagem.
								</p>
								<p style={{ color: '#d1d5db', marginBottom: 0 }}>
									Acreditamos que o conhecimento deve ser acessível e que cada conquista pode abrir caminhos para novas possibilidades.
								</p>
							</article>

							<aside
								style={{
									padding: '28px',
									borderRadius: '20px',
									background: 'linear-gradient(180deg, #ec4899 0%, #8b5cf6 100%)',
									color: '#ffffff',
								}}
							>
								<h2 style={{ marginTop: 0, fontSize: '1.6rem' }}>Nosso impacto</h2>
								<ul style={{ paddingLeft: '20px', margin: '16px 0 0' }}>
									<li>Aprendizado prático</li>
									<li>Comunidade de apoio</li>
									<li>Inspiração para novas jornadas</li>
								</ul>
							</aside>
						</div>
					</section>
				</div>
			</section>
		</main>
	);
}
